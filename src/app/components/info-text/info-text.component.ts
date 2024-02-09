import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.scss']
})
export class InfoTextComponent {
  @Input() infoText!:string;
}
