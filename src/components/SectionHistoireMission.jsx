import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SectionHistoireMission() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Titre global */}
        <h2 className="text-center mb-5">Notre Histoire & Notre Mission</h2>

        <div className="row">
          {/* Histoire */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <h3 className="mb-3">Notre Histoire</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                fermentum, augue at varius sagittis, velit velit consequat orci,
                eget faucibus elit metus nec risus. Nulla facilisi.
              </p>
              <p>
                Aenean mollis sem vitae nisi tristique, at egestas nisl
                sollicitudin. Duis pharetra ac nulla non laoreet.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <h3 className="mb-3">Notre Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et sem nec magna gravida rutrum. Donec vel blandit neque.
              </p>
              <p>
                Suspendisse potenti. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
