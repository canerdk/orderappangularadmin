import {Component, OnInit} from '@angular/core';
import {Service} from '../services/service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    category: any;

    constructor(private service: Service,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.service.getCategories().then((data) => {
            this.category = data;
        });
    }

    categoryDetail(id) {
        this.router.navigate(['/category-detail', id]);
    }

    delete(category) {
        console.log(category);
    }


}
