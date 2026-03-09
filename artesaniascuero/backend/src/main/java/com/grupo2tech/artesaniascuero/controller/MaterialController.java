package com.grupo2tech.artesaniascuero.controller;
import org.springframework.web.bind.annotation.*;
import com.grupo2tech.artesaniascuero.model.Material;
import com.grupo2tech.artesaniascuero.service.MaterialService;
import java.util.List;

@RestController
@RequestMapping("/api/materials")

public class MaterialController {  
    private final MaterialService materialService;

    // Inyección de dependencias
    public MaterialController(MaterialService materialService){
        this.materialService = materialService;
    }

    // Crear material
    @PostMapping
    public Material createMaterial(@RequestBody Material material){
        return materialService.createMaterial(material);
    }

    // Obtener todos los materiales
    @GetMapping
    public List<Material> getAllMaterials(){
        return materialService.getAllMaterials();
    }

    // Obtener material por ID
    @GetMapping("/{id}")
    public Material getMaterialById(@PathVariable Long id){
        return materialService.getMaterialById(id);
    }

    // Actualizar material
    @PutMapping("/{id}")
    public Material updateMaterial(@PathVariable Long id, @RequestBody Material material){
        return materialService.updateMaterial(id, material);
    }

    // Eliminar material
    @DeleteMapping("/{id}")
    public void deleteMaterial(@PathVariable Long id){
        materialService.deleteMaterial(id);
    }
}   
