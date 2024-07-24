/* eslint-disable react/no-unescaped-entities */
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

// Define the testimonials data
const testimonials = [
  {
    id: "1",
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    id: "2",
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    id: "3",
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    id: "4",
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    id: "5",
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    id: "6",
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    id: "7",
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    id: "8",
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    id: "9",
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

// Split testimonials into columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Component for rendering a column of testimonials
const TestimonialsColumn = ({ className, testimonials }: { className?: string; testimonials: typeof testimonials }) => {
  return (
    <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)]", className)}>
      {testimonials.map(({ id, text, imageSrc, name, username }) => (
        <div key={id} className="card p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-gray-700">{text}</p>
          <div className="flex items-center gap-2 mt-5">
            <Image
              src={imageSrc}
              alt={`${name}'s avatar`} // Improved alt text for accessibility
              className="h-10 w-10 rounded-full"
              width={40}
              height={40}
              priority // Optional: Load images as priority if needed
            />
            <div>
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight text-gray-500">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main component for rendering all testimonials
export const Testimonials = () => {
  return (
    <section className="bg-white py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="tag mb-4 text-lg font-semibold">Testimonials</div>
          <h2 className="section-title text-center mt-5 text-3xl font-bold">What our users say</h2>
          <p className="section-description mt-5 text-center max-w-2xl text-gray-600">
            By highlighting real experiences from satisfied clients, these testimonials provide compelling social proof of our platform's reliability and effectiveness. Our customers praise the seamless integration, user-friendly interface, and exceptional customer support, underscoring the tangible benefits and value we deliver.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:flex" />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
};
