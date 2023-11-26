import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private data: string = 'Hello from my service!';

  getData(): string {
      return this.data;
  }

  setData(newData: string): void {
      this.data = newData;
  }
}
