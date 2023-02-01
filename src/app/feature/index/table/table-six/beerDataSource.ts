import { DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core";
import { Production } from "src/app/core/model/production";
import { BehaviorSubject, Observable} from 'rxjs';
import { DataService } from "src/app/core/data.service";
import { Sort } from '@angular/material/sort';

@Injectable()
export class BeerDataSource extends DataSource<Production>{

    beers$ = new BehaviorSubject<Production[]>([]);
    isLoading$ = new BehaviorSubject<boolean>(false);

    constructor(private dataService: DataService){
        super();
    }

    connect(): Observable<Production[]>{
        return this.beers$.asObservable();
    }

    disconnect(): void {
        this.beers$.complete();
    }

    loadBeers(sort: Sort):void{
        this.isLoading$.next(true)
        this.dataService.fetchBeersTable(sort).subscribe((beers)=>{
            this.beers$.next(beers);
            this.isLoading$.next(false);
        })
    }
 
}