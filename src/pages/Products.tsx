import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import medicalEquipment from "@/assets/medical-equipment-1.jpg";
import surgicalInstruments from "@/assets/surgical-instruments.jpg";
import militaryKit from "@/assets/military-medical-kit.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Hospital Equipment",
      description: "Advanced medical devices and monitoring systems for comprehensive patient care in hospital environments.",
      image: medicalEquipment,
      products: [
        "Patient Monitoring Systems",
        "IV Infusion Systems", 
        "Ventilators & Respiratory Equipment",
        "Diagnostic Imaging Devices",
        "Cardiac Monitoring Equipment",
        "Surgical Tables & Equipment"
      ],
      certifications: ["FDA Approved", "CE Marked", "ISO 13485"]
    },
    {
      title: "Surgical Instruments",
      description: "Precision-engineered surgical tools and instruments meeting the highest standards of medical excellence.",
      image: surgicalInstruments,
      products: [
        "Surgical Instrument Sets",
        "Minimally Invasive Tools",
        "Electrosurgical Devices",
        "Disposable Surgical Supplies",
        "Sterilization Equipment",
        "Surgical Lighting Systems"
      ],
      certifications: ["FDA Approved", "ISO 13485", "Sterility Assured"]
    },
    {
      title: "Military Medical Kits",
      description: "Rugged, field-tested medical supplies designed specifically for military and emergency response operations.",
      image: militaryKit,
      products: [
        "Combat Medic Bags",
        "Trauma Response Kits",
        "Field Surgical Instruments",
        "Emergency Pharmaceuticals",
        "Portable Diagnostic Equipment",
        "Tactical Medical Supplies"
      ],
      certifications: ["Military Spec", "NATO Approved", "Combat Tested"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Medical Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive medical equipment and supplies designed for hospitals, 
              clinics, and military operations. Every product meets the highest 
              international quality standards.
            </p>
          </div>

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className={`p-8 lg:p-12 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                        <p className="text-muted-foreground text-lg">{category.description}</p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">Product Range:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {category.products.map((product, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{product}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Certifications & Standards:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.certifications.map((cert, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button variant="hero" className="group">
                        Request Catalog
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-gradient-hero rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <Shield className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Quality Assured</h3>
                <p className="text-muted-foreground">
                  All products undergo rigorous testing and quality control processes.
                </p>
              </div>
              <div className="space-y-4">
                <Zap className="h-12 w-12 text-accent mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Emergency supply chain with rapid deployment capabilities worldwide.
                </p>
              </div>
              <div className="space-y-4">
                <Globe className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Global Support</h3>
                <p className="text-muted-foreground">
                  24/7 technical support and maintenance services across all regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;