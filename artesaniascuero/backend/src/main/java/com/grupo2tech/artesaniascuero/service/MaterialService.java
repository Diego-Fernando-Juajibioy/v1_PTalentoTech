package com.grupo2tech.artesaniascuero.service;
import org.springframework.stereotype.Service;
import com.grupo2tech.artesaniascuero.model.Material;
import com.grupo2tech.artesaniascuero.repository.MaterialRepository;
import java.util.List;

@Service
public class MaterialService {
    private final MaterialRepository materialRepository;

    public MaterialService(MaterialRepository materialRepository){
        this.materialRepository = materialRepository;
    }

    public Material createMaterial(Material material){
        // lógica de negocio
        if(materialRepository.findByName(material.getName()) != null){
            throw new RuntimeException("El material ya existe");
        }

        return materialRepository.save(material);
    }

    public List<Material> getAllMaterials(){
        return materialRepository.findAll();
    }

    public Material getMaterialById(Long id){
        return materialRepository.findById(id).orElse(null);
    }

    public Material updateMaterial(Long id, Material material){
        material.setId(id);
        return materialRepository.save(material);
    }

    public void deleteMaterial(Long id){
        materialRepository.deleteById(id);
    }

}
