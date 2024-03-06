export default function AboutPage() {
  return (
    <div>
      <div className="space-y-5">
        <section>
          <h2 className="text-2xl font-bold">What is Brutalism?</h2>
          <p className="text-xl my-4">
            Brutalism is an architectural style that emerged in the
            1950s. It is characterized by its use of raw, unfinished
            concrete, bold geometric shapes, and an expressive design
            approach. The term "brutalism" originates from Le
            Corbusier's phrase in French: "béton brut," which means
            "raw concrete."
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Why London?</h2>
          <p className="text-xl my-4">
            London has some of the best examples of Brutalism in the
            world. After World War II, a group of idealists began to
            rebuild the city in concrete. What remain are some of the
            most striking civic and housing projects ever built.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">What is this website?</h2>
          <p className="text-xl my-4">
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
