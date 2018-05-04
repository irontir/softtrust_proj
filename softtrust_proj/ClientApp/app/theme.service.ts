import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from './theme';

@Injectable()
export class ThemeService {

    private url = "/api/themes";

    constructor(private http: HttpClient) {
    }

    getThemes() {
        return this.http.get(this.url);
    }

    createTheme(theme: Theme) {
        return this.http.post(this.url, theme);
    }
    updateTheme(theme: Theme) {

        return this.http.put(this.url + '/' + theme.id, theme);
    }
    deleteTheme(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}