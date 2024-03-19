export default function AboutPage() {
  return (
    <div>
      <div className="space-y-5 mx-5 py-10 sm:mx-0">
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
          <h1 className="text-2xl font-bold">
            Who made this website?
          </h1>
          <p className="text-xl py-4">
            This website was created by Jack Kershaw, the code can be
            viewed{" "}
            <a href="https://github.com/jones58/brutalist-buildings-guesser">
              here.
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
