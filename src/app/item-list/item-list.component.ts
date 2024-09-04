import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
      this.filteredItems = data; // Initialize filtered items
    });
  }

  filterItems(): void {
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  sortItemsAsc() {
  this.filteredItems.sort((a, b) => a.name.localeCompare(b.name));
}

sortItemsDesc() {
  this.filteredItems.sort((a, b) => b.name.localeCompare(a.name));
}
}
