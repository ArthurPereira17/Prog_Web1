import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album';

@Injectable({
  providedIn: 'root',
})
export class ServiceAlbum {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Album[]> {
    return this.httpClient.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  findById(pId: number): Observable<Album> {
    return this.httpClient.get<Album>('https://jsonplaceholder.typicode.com/albums/' + pId);
  }

  updateAlbum(pAlbum: Album): Observable<Album> {
    return this.httpClient.put<Album>('https://jsonplaceholder.typicode.com/albums/' + pAlbum.id, pAlbum);
  }

  deleteAlbum(pId: number): Observable<void> {
    return this.httpClient.delete<void>('https://jsonplaceholder.typicode.com/albums/' + pId);
  }

  insertAlbum(pAlbum: Album): Observable<Album> {
    return this.httpClient.post<Album>('https://jsonplaceholder.typicode.com/albums', pAlbum);
  }
}