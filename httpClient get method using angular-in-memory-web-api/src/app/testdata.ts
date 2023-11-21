import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{

    createDb(){
        let bookDetails=[
            {id: 100, name: 'Angular by Shahzad', category:'Angular' },
            {id: 101, name: 'React by Shahzad', category:'React' },
            {id: 102, name: 'DotNet by Shahzad', category:'DotNet' }
        ];
        return {books: bookDetails};
    }

}