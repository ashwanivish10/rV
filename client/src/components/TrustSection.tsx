import Marquee from "./Marquee";

export default function TrustSection() {


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from customers who trust our services
          </p>
        </div>

        <div className="mt-8">
          <Marquee />
        </div>
      </div>
    </section>
  );
}
