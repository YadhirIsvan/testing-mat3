import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StddevComponent } from './stddev.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [StddevComponent]
    });
    component = TestBed.createComponent(StddevComponent).componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should call loadData on ngOnInit', () => {
    spyOn(component, 'loadData');
    component.ngOnInit();
    expect(component.loadData).toHaveBeenCalledWith('assets/data_column1.txt', 'column1');
    expect(component.loadData).toHaveBeenCalledWith('assets/data_column2.txt', 'column2');
  });


  it('Should return stddev = 572.03 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {

    const mockTxtResponse = '160\n591\n114\n229\n230\n270\n128\n1657\n624\n1503\n';
    component.loadData('assets/data_column1.txt', 'column1');
    const req = httpMock.expectOne('assets/data_column1.txt');
    req.flush(mockTxtResponse);
    expect(component.stddev['column1']).toBeCloseTo(572.03, 2); 
  });
  
  it('Should return stddev = 62.26 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const mockTxtResponse = '15.0\n69.9\n6.5\n22.4\n28.4\n65.9\n19.4\n198.7\n38.8\n138.2\n';
    component.loadData('assets/data_column2.txt', 'column2');
    const req = httpMock.expectOne('assets/data_column2.txt');
    req.flush(mockTxtResponse);
    expect(component.stddev['column2']).toBeCloseTo(62.26, 2); 
  });

  it('should return NaN when data array s empty', () => {
    expect(component.calculateStddev([])).toBeNaN();
  });

  afterEach(() => {
    httpMock.verify();
  });
});