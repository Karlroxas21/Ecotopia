import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-admin-currentissue',
  templateUrl: './admin-currentissue.component.html',
  styleUrls: ['./admin-currentissue.component.css'],
})

export class AdminCurrentissueComponent{
  text: string = 'click to edit me';

  @Input() value !: string;
  editing: boolean = false;

  startEditing() {
    this.editing = true;
  }

  finishEditing(event: any) {
    this.editing = false;
    this.value = event.target.value;
  }
}
