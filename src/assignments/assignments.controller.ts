import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    // Method to check if a number is prime
    @Get('prime/:number')
    isPrime(@Param('number') number: number): { isPrime: boolean } {
        if (number <= 1) return { isPrime: false };
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return { isPrime: false };
            }
        }
        return { isPrime: true };
    }
}
