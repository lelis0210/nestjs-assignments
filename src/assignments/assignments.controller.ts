import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    @Get('fibonacci/:n')
    getFibonacciSequence(@Param('n') n: string): object {
        const num = parseInt(n);
        if (isNaN(num) || num <= 0) {
            return { message: 'Please provide a valid number greater than 0' };
        }
        const sequence = this.generateFibonacci(num);
        return { sequence };
    }

    private generateFibonacci(n: number): number[] {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.slice(0, n);
    }
}
