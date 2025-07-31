import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import medicalEquipment from "@/assets/medical-equipment-1.jpg";
import surgicalInstruments from "@/assets/surgical-instruments.jpg";
import militaryKit from "@/assets/military-medical-kit.jpg";
import combatRescueEquipment from "@/assets/combat-rescue-equipment.jpg";
import medicineFirstAid from "@/assets/medicine-first-aid.jpg";
import seniorCareKit from "@/assets/senior-care-kit.jpg";

const ProductShowcase = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      title: "Hospital Equipment",
      description: "State-of-the-art medical devices and monitoring systems for comprehensive patient care.",
      image: medicalEquipment,
      features: ["IV Systems", "Patient Monitors", "Diagnostic Tools"]
    },
    {
      title: "Surgical Instruments",
      description: "Precision-engineered surgical tools meeting the highest standards of medical excellence.",
      image: surgicalInstruments,
      features: ["Sterile Instruments", "Surgical Kits", "Disposable Supplies"]
    },
    {
      title: "Military Medical Kits",
      description: "Rugged, field-tested medical supplies designed for military and emergency response.",
      image: militaryKit,
      features: ["Trauma Kits", "Field Supplies", "Emergency Equipment"]
    },
    {
      title: "Combat Operation & Rescue Equipment",
      description: "Specialized diagnostic and rescue equipment for combat operations and emergency response.",
      image: combatRescueEquipment,
      features: ["Rescue Equipment", "Operation Diagnostic Tools", "Combat Medical Gear"]
    },
    {
      title: "Medicine & First Aid Equipment",
      description: "Complete range of medicines and first aid supplies for immediate medical response.",
      image: medicineFirstAid,
      features: ["Emergency Medicines", "First Aid Kits", "Medical Supplies"]
    },
    {
      title: "Senior Citizen Supporting Kits",
      description: "Comprehensive support kits and accessories designed specifically for elderly care.",
      image: seniorCareKit,
      features: ["Mobility Aids", "Health Monitoring", "Daily Care Accessories"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive medical solutions designed for hospitals, clinics, and military operations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-background">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300" 
                    onClick={() => {
                      console.log('Learn More button clicked for:', product.title);
                      navigate('/products');
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => {
              console.log('View All Products button clicked');
              navigate('/products');
            }}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;