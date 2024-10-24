import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit {

  data: { [key: string]: number[] } = {};
  stddev: { [key: string]: number | undefined } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData('assets/data_column1.txt', 'column1');
    this.loadData('assets/data_column2.txt', 'column2');
  }


  loadData(filePath: string, column: string): void {
    this.http.get(filePath, { responseType: 'text' }).subscribe((response) => {
      const data = this.processData(response);
      this.data[column] = data;
      this.stddev[column] = this.calculateStddev(data);
     
    });
  }

  
  private processData(response: string): number[] {
    return response.split('\n')
                   .map(val => parseFloat(val.trim()))
                   .filter(val => !isNaN(val));
  }


  calculateStddev(data: number[]): number {
    if (data.length === 0) return NaN;

    const mean = this.calculateMean(data);
    const variance = data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (data.length - 1);
    return Math.sqrt(variance);
  }


  private calculateMean(data: number[]): number {
    return data.reduce((a, b) => a + b, 0) / data.length;
  }
}