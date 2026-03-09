import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8080/api/auth';

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<boolean> {
        return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password }).pipe(
            map(response => {
                localStorage.setItem('authToken', response.token);
                return true;
            }),
            catchError(error => {
                console.error('Login error:', error);
                return of(false);
            }
        ));
    }

    logout(): void {
        localStorage.removeItem('authToken');
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('authToken');
    }
}