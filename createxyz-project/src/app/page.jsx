"use client";
import React from "react";

function MainComponent() {
  const [images, setImages] = useState([
    "https://ucarecdn.com/91916687-0566-4e9d-a75e-4a50289ca010/-/format/auto/.jpg",
    "https://ucarecdn.com/9a0ad94a-62a8-4c13-9481-48c5898f3fc5/-/format/auto/.jpg",
    "https://ucarecdn.com/d1ced42d-48dc-41d0-a408-2abc759b9742/-/format/auto/.jpg",
    "https://ucarecdn.com/d28826ac-0e05-404b-a608-9385d4a37618/-/format/auto/.jpg",
    "https://ucarecdn.com/d128ab4c-5f80-41cd-b356-490a3a821c64/-/format/auto/.jpg",
    "https://ucarecdn.com/627cad16-1176-4356-9372-e946e610fba2/-/format/auto/.jpg",
    "https://ucarecdn.com/8870f1e8-278c-4a34-a963-e3f36abae392/-/format/auto/.jpg",
    "https://ucarecdn.com/c1130ed6-2534-4b1e-be00-ac91d67f5b2c/-/format/auto/.jpg",
    "https://ucarecdn.com/f1e80036-d370-4dc4-8064-f529c99b5bdc/-/format/auto/.jpg",
    "https://ucarecdn.com/0146f1ca-bfde-4530-a2b1-9838f4529fa6/-/format/auto/.jpg",
    "https://ucarecdn.com/459277fa-360c-4952-a78b-b3f829753cd4/-/format/auto/.jpg",
    "https://ucarecdn.com/4f6dab5f-492c-4bcb-b55a-622cb12bc61d/-/format/auto/.jpg",
    "https://ucarecdn.com/6e6b7705-4a49-4bd8-9659-487d11bfb60e/-/format/auto/.jpg",
    "https://ucarecdn.com/d4cab9d0-32b3-4363-a6be-0af894c35c9b/-/format/auto/.jpg",
    "https://ucarecdn.com/98f7640c-c6e7-4013-acc6-d77750d91afc/-/format/auto/.jpg",
    "https://ucarecdn.com/413b793d-4c9c-4290-85c8-950d2105c0db/-/format/auto/.jpg",
    "https://ucarecdn.com/9a7625b1-79a4-4430-bf02-f23bdfd914eb/-/format/auto/.jpg",
  ]);

  return (
    <div className="min-h-screen bg-white px-12 md:px-16 py-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="font-dancing-script text-2xl">Haruki Murata</h1>
        <div className="flex">
          <a
            href="mailto:harumakigraph@gmail.com"
            className="font-times text-sm mr-6 hover:text-gray-600"
          >
            Contact
          </a>
          <a
            href="https://instagram.com/harumakigraph"
            target="_blank"
            rel="noopener noreferrer"
            className="font-times text-sm hover:text-gray-600"
          >
            Instagram
          </a>
        </div>
      </header>

      <main className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full ${index === 7 ? "max-h-[400px]" : ""}`}
            >
              <img
                src={image}
                alt={`Portfolio image ${index + 1}`}
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainComponent;