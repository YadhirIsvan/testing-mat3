
export function sumX(dataX: number[]): number {
    return dataX.reduce((acc, val) => acc + val, 0);
  }
  
  export function sumY(dataY: number[]): number {
    return dataY.reduce((acc, val) => acc + val, 0);
  }
  
  export function sumXY(dataX: number[], dataY: number[]): number {
    return dataX.reduce((acc, x, i) => acc + x * dataY[i], 0);
  }
  
  export function sumX2(dataX: number[]): number {
    return dataX.reduce((acc, val) => acc + val ** 2, 0);
  }
  
  export function sumY2(dataY: number[]): number {
    return dataY.reduce((acc, val) => acc + val ** 2, 0);
  }
  
  export function calculateCoefficients(dataX: number[], dataY: number[]) {
    const n = dataX.length;
    const sum_x = sumX(dataX);
    const sum_y = sumY(dataY);
    const sum_xx = sumX2(dataX);
    const sum_xy = sumXY(dataX, dataY);
  
    const beta1 = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x ** 2);
    const beta0 = (sum_y - beta1 * sum_x) / n;
  
    return { beta0, beta1 };
  }
  
  export function predict(x: number, beta0: number, beta1: number): number {
    return beta0 + beta1 * x;
  }
  
  export function calculateCorrelation(dataX: number[], dataY: number[]): { r: number; rr: number } {
    const n = dataX.length;
    const sum_x = sumX(dataX);
    const sum_y = sumY(dataY);
    const sum_xy = sumXY(dataX, dataY);
    const sum_x2 = sumX2(dataX);
    const sum_y2 = sumY2(dataY);
  
    const numerator = n * sum_xy - sum_x * sum_y;
    const denominator = Math.sqrt((n * sum_x2 - sum_x * 2) * (n * sum_y2 - sum_y * 2));
  
    const r = numerator / denominator;
    const rr = r ** 2;
  
    return { r, rr };
