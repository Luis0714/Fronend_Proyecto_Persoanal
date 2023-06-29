import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTES } from 'src/apis-routes';
import { ResponseModel } from 'src/app/Models/Responses/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = `${API_ROUTES.FileUrl}`;
  constructor(
    private http: HttpClient
  ) { }


  uploadImage(file: Blob){
    const dto = new FormData();
    dto.append('file',file);
    return this.http.post<ResponseModel>(`${this.apiUrl}/upload`, dto);
  }


}
