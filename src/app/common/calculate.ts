export class Calculate {

    static sumX(xValues: number[]): number {
      return xValues.reduce((sum, value) => sum + value, 0);
    }
  
    static sumY(yValues: number[]): number {
      return yValues.reduce((sum, value) => sum + value, 0);
    }
  
    static sumXY(xValues: number[], yValues: number[], avgX: number, avgY: number): number {
      let sumXY = 0;
      for (let i = 0; i < xValues.length; i++) {
        sumXY += (xValues[i] - avgX) * (yValues[i] - avgY);
      }
      return sumXY;
    }
  
    static sumXX(xValues: number[], avgX: number): number {
      let sumXX = 0;
      for (let i = 0; i < xValues.length; i++) {
        sumXX += (xValues[i] - avgX) * (xValues[i] - avgX);
      }
      return sumXX;
    }
  
    // se agrega función sumYY
    static sumYY(yValues: number[], avgY: number): number {
      let sumYY = 0;
      for (let i = 0; i < yValues.length; i++) {
        sumYY += (yValues[i] - avgY) * (yValues[i] - avgY);
      }
      return sumYY;
    }
  }