interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="flex items-center">
      <article className="step-card flex flex-col items-center gap-3 w-full max-w-[400px] text-white">
        <figure className="icon-container mb-3">
          <img
            src={number}
            alt={title}
            className="w-[50px] h-[70px] object-contain"
            loading="lazy"
          />
        </figure>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground max-w-xs mx-auto text-center">
          {description}
        </p>
      </article>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="section relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            data-aos="fade-up"
          >
            How It Works
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Creating your portfolio is simple with our intuitive three-step
            process designed to get you online quickly and professionally.
          </p>
        </div>

        <div
          className="steps-container flex flex-col md:flex-row justify-center items-center gap-16 relative z-10 py-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Step
            number="src/assets/number-1.png"
            title="Enter Your Info"
            description="Fill out a simple form with your personal details, skills, projects, and experience."
          />
          <Step
            number="src/assets/number-2.png"
            title="Customize"
            description="Choose colors, layout, and adjust the look and feel to match your personal style."
          />
          <Step
            number="src/assets/number-3.png"
            title="Deploy"
            description="Preview your portfolio and deploy it to the web with a single click."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
