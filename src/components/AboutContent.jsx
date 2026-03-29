import Image from "next/image";
import ranchHouseImage from "@/src/images/historyPics/2019RanchHouse1.png";
import PageIntro from "./shared/PageIntro";

export default function AboutContent() {
  return (
    <PageIntro title="Lucky Well Vineyard">
      <div className="mt-8 space-y-6">
        <p>The wines from the vineyard are generally estate designated as from the Lucky Well Vineyard.</p>
        <p>
          Looking at the older, as well as the more recent pictures of the house, it may appear the
          historic well is the reason for the vineyard designation. Indeed, when Ray Furlong
          purchased the ranch in 1938 the well outside the house was known as having the sweetest
          water in the area and it never went dry. Then again, in 1938 there was no electricity or
          means to supply the necessities of modern living: indoor plumbing.
        </p>
        <p>
          One of the first priorities Ray had was finding a location for a more dependable well
          which could meet the needs. The plan was to find a source close by and pump the water to a
          water tower up in the pasture and let the force of gravity flow it downhill to the house.
          One of Ray&apos;s sisters, Claire, decided to try and dowse for water which produced the two
          wells close enough to the house and water tower with enough water for what then was one
          house, and later supplied a caretakers house, a guest house and pool as well. At the time
          all the wells were hand dug shallow wells approximately 20 feet deep. They never went dry.
        </p>
        <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/65 shadow-[0_18px_45px_-30px_rgba(59,45,24,0.35)] backdrop-blur">
          <Image
            src={ranchHouseImage}
            alt="Lucky Well Vineyard ranch house"
            className="w-full object-cover"
          />
        </div>
        <p>
          When Ulises Valdez Sr. who designed and planted the vineyard, was looking for a well, he
          unsuccessfully tried a couple of locations. In the process he struck up a conversation
          with our neighbor Bill Ruxton, whose father George was one of Ray&apos;s best friends and
          hunting partners and bought their adjacent ranch, neighboring Ray&apos;s in 1940, shortly
          after Ray bought his. Bill pointed out a couple of other locations Claire had dowsed.
          Ulises dug there and found the water that now supplies the vineyard and everything else.
          Thereafter, Ulises named it the &quot;Lucky Well Vineyard.&quot; So far, through several droughts,
          it has not run dry.
        </p>
        <p>
          After his untimely death at the age of 47 Ulises&apos;s children, most notably Ulises Jr,
          Elizabeth and Ricardo, have taken over the active management for the vineyard and their
          vineyard management business. In keeping with the family tradition the vineyard has
          flourished as evidenced by the Arista Winery&apos;s Lucky Well Vineyard 2017 Pinot Noir being
          listed as one of the <em>top 100 wines in the world.</em>
        </p>
      </div>
    </PageIntro>
  );
}
