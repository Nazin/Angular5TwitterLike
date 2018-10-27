import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class PostService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}/posts`).pipe(map(response => response.map(post => new Post(post))));
  }

  getAllPostsSorted(sortBy: string, sortOrder: number): Observable<Post[]> {
    return this.getAllPosts().pipe(map(response => response.sort((post1, post2) => {
      const result = (post1[sortBy] < post2[sortBy]) ? -1 : (post1[sortBy] > post2[sortBy]) ? 1 : 0;
      return result * sortOrder;
    })));
  }

  getPost(id: number) {
    return this.http.get(`${this.API_URL}/posts/${id}`);
  }

}
