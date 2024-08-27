export default function AboutPage() {
  return (
    <div>
      <div className="space-y-5 mx-5 py-10 sm:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1">
          <section>
            <h1 className="text-2xl">What is Brutalism?</h1>
            <p className="text-xl py-4">
              Brutalism is an architectural style that emerged in the
              1950s. It is characterized by its use of raw, unfinished
              concrete, bold geometric shapes, and an expressive design
              approach. The term "brutalism" originates from Le
              Corbusier's phrase in French: "béton brut," which means
              "raw concrete."
            </p>
          </section>
          <section>
            <h1 className="text-2xl font-bold">Why London?</h1>
            <p className="text-xl py-4">
              London has some of the best examples of Brutalism in the
              world. After World War II, a group of idealists began to
              rebuild the city in concrete. What remain are some of the
              most striking civic and housing projects ever built.
            </p>
          </section>
          <section>
            <p className="text-xl py-10">
              This website was created by Jack Kershaw and the code can
              be viewed{" "}
              <a
                href="https://github.com/jones58/brutalist-buildings-guesser"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . You can contact me by email here: {""}
              <a
                href="mailto:jackkershaw@protonmail.com"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                jackkershaw@protonmail.com
              </a>
            </p>
          </section>
        </div>
        <img
          src="/images/AboutPage.webp"
          alt="building"
          className="filter grayscale w-full h-[70vh] object-contain col-span-1 md:col-start-2 lg:col-start-3 "
        />
      </div>
    </div>
  );
}
