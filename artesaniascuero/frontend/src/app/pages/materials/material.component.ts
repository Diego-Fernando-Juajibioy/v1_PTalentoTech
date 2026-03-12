import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Material } from '../../models/material.model';
import { MaterialService } from '../../core/services/material.service';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  materiales: Material[] = [];
  loading: boolean = false;

  mostrarModal: boolean = false;

  // objeto para crear material
  nuevoMaterial: any = {
    name: '',
    category: '',
    base_unit: '',
    stock_min: 0,
    active: true
  };

  // filtro
  filtroCategoria: string = '';

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.cargarMateriales();
  }

  cargarMateriales(): void {

    this.loading = true;

    this.materialService.getMaterials().subscribe({

      next: (data: Material[]) => {
        this.materiales = data;
        this.loading = false;
      },

      error: (err) => {
        console.error('Error al cargar materiales:', err);
        this.loading = false;
      }

    });

  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  guardarMaterial(): void {

    console.log("Material enviado:", this.nuevoMaterial);

    this.materialService.createMaterial(this.nuevoMaterial).subscribe({

      next: (data) => {

        console.log("Material creado:", data);

        this.cargarMateriales();

        // limpiar formulario
        this.nuevoMaterial = {
          name: '',
          category: '',
          base_unit: '',
          stock_min: 0,
          active: true
        };

        this.cerrarModal();

      },

      error: (err) => {
        console.error("Error creando material", err);
      }

    });

  }

  // materiales filtrados por categoría
  get materialesFiltrados(): Material[] {

    if (!this.filtroCategoria) {
      return this.materiales;
    }

    return this.materiales.filter(
      m => m.category === this.filtroCategoria
    );

  }

}