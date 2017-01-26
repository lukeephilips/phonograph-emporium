import { Component, OnInit, Input } from '@angular/core';
// import { Album } from '../album.model'
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [AlbumService]
})
export class EditComponent implements OnInit {
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }
  beginUpdatingAlbum(albumToUpdate){
    this.albumService.updateAlbum(albumToUpdate);
  }
  beginDeletingAlbum(albumToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.albumService.deleteAlbum(albumToDelete);
    }
  }
}
