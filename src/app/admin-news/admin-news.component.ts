import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { AdminNewsService } from './admin-news.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {
  selectedDateValue = new Date();
  datepickerModel?: Date;
  daterangepickerModel?: Date[];
  news: any[] = [];
  itemsToShow: number = 6;

  isThereAnyChanges: boolean = false;

  newNewsItem: any = {
    title: '',
    datePublished: '',
    link: '',
    description: '',
  };

  constructor(
    private http: HttpClient,
    private adminNewsService: AdminNewsService,
    private toastr: ToastrService
  ) {}

  openEditModal(item: any): void {
    this.news = item;
  }

  saveNews(item: any) {
    if (this.isAnyChanges()) {
      if (this.containsHarmfulCharacters(item)) {
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
      } else if (this.hasEmptyFields(item)) {
        this.toastr.error('Some fields are empty.', 'Error');
      } else {
        this.adminNewsService.updateDataById(item).subscribe(
          (data) => {
            this.toastr.success(item._id, 'News updated successfully with ID: ');
          },
          (err) => {
            console.error('Error updating item with ID: ', item._id);
            this.toastr.error(item._id, 'Error updating item with ID: ');
          }
        );

        this.isThereAnyChanges = false;
      }
    } else {
      this.toastr.info('No changes were made.', 'Info');
    }
  }

  addNews() {
    if (this.hasEmptyFields(this.newNewsItem)) {
      this.toastr.error('Some fields are empty.', 'Error');
    } else if (this.containsHarmfulCharacters(this.newNewsItem)) {
      this.toastr.error('Input contains harmful characters.', 'Error');
    } else {
      this.adminNewsService.addData(this.newNewsItem).subscribe(
        (res) => {
          this.toastr.success(this.newNewsItem.title, 'Successfully Added!');
          this.clearForm();
        },
        (err) => {
          this.toastr.error('Error adding item: ', this.newNewsItem.title);
          console.error(err);
        }
      );
    }
  }

  deleteNews(item: any) {
    this.adminNewsService.deleteData(item).subscribe(
      (res) => {
        this.toastr.success(item._id, ' Deleted');
      },
      (err) => {
        this.toastr.error('Error deleting item: ', item._id);
      }
    );
  }

  clearForm() {
    this.newNewsItem = {
      title: '',
      datePublished: '',
      link: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.adminNewsService.getData().subscribe((news) => {
      this.news = news;
    });
  }

  loadMore() {
    this.itemsToShow += 5;
  }

  isAnyChanges() {
    return this.isThereAnyChanges;
  }

  doesChange() {
    this.isThereAnyChanges = true;
  }

  containsHarmfulCharacters(item: any): boolean {
    const harmfulCharactersRegex = /[!@#$%^&*_+={}\[\];<>/?\\|]/;
    
    return (
      harmfulCharactersRegex.test(item.title) ||
      harmfulCharactersRegex.test(item.description)
    );
  }

  hasEmptyFields(item: any): boolean {
    return (
      !item.title ||
      !item.datePublished ||
      !item.link ||
      !item.description
    );
  }
}