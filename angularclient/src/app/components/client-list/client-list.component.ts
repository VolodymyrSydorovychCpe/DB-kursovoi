import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.updateClientList();
  }

  onDelete(id: number) {
    this.clientService.delete(id).subscribe(result => this.updateClientList());
  }

  onUpdate(id: number, name: string, address: string) {
    this.clientService.update(new Client(id, name, address)).subscribe(result => this.updateClientList());
  }

  updateClientList() {
    this.clientService.findAll().subscribe(data => {
            this.clients = data;
          });
  }
}
