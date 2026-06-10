import { Component } from '@angular/core';
import { Album } from '../../model/album';
import { ServiceAlbum } from '../../controller/service-album';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-cad-album',
  imports: [FormsModule, NgClass],
  templateUrl: './cad-album.html',
  styleUrl: './cad-album.css',
})
export class CadAlbum {
  vetAlbum: Album[] = [];

  album: Album = {
    userId: 0,
    id: 0,
    title: '',
  }
  albumAlterado: Album = {
    userId: 0,
    id: 0,
    title: '',
  }

  constructor(private serviceAlbum: ServiceAlbum) {}

  carregaAlbum(): void {
    this.serviceAlbum.findAll().subscribe({
      next: (pVetAlbum) => this.vetAlbum = pVetAlbum,
      error: (pErro: HttpErrorResponse) => console.log(pErro.status + ' - ' + pErro.message)
    });
  }

  alteraAlbum(pAlbum: Album): void {
    this.serviceAlbum.updateAlbum(pAlbum).subscribe({
      next: (pAlbumAlterado) => {
        let pos = this.vetAlbum.findIndex(a => a.id === pAlbumAlterado.id);
        if (pos > -1) {
          this.vetAlbum[pos] = pAlbumAlterado;
        }
      },
      error: (pErro: HttpErrorResponse) => console.log(pErro.status + ' - ' + pErro.message)
    });
  }
}
