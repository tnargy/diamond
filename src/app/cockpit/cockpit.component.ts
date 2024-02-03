import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  onAddServer(nameInput: HTMLInputElement, conentInput: HTMLInputElement) {

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: conentInput.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, conentInput: HTMLInputElement) {
    this.bluprintCreated.emit({
      serverName: nameInput.value,
      serverContent: conentInput.value
    });
  }
}
