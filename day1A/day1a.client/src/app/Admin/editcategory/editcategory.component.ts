import { Component } from '@angular/core';
import { AdminService } from '../../Services/AdminService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  standalone: false,
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {


  constructor(private _admin: AdminService, private _active: ActivatedRoute) { }

  CategoryContent: any =[];
  ngOnInit() {
    let id = this._active.snapshot.paramMap.get("id");
    this._admin.GetCategoryById(id).subscribe((data: any) => {
      this.CategoryContent = data;
      debugger;
    });

  }

  id: any;


  EditCategory(EditedCategory: any) {
      let id = this._active.snapshot.paramMap.get("id");

      this._admin.EditCategory(EditedCategory, id) .subscribe((data: any) => {
          alert("Updated Successfully");
});
   
  }

}
