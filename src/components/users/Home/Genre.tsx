import React from "react";

const Genre = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <div className="glass-button p-4">
        <h3 className="text-2xl">01</h3>
        <h2 className="text-2xl font-semibold font-henny py-2">
          Lament Psalms
        </h2>
        <p className="mb-2">
          Expressing deep sorrow for the travails of a nation and as a group
          asking for God’s blessing or intervention.
        </p>
        <p className="mb-2">
          <b>Group Worship:</b> 12, 44, 58, 60, 74, 79, 80, 83, 85, 89*, 90, 94,
          123, 126, 129.
        </p>
        <p>
          <b>Personal:</b> 3, 4, 5, 7, 9-10, 13, 14, 17, 22, 25, 26, 27*, 28,
          31, 36*, 39, 40:12-17, 41, 42-43, 52*, 53, 54, 55, 56, 57, 59, 61, 64,
          70, 71, 77, 86, 89*, 120, 139, 141, 142
        </p>
      </div>
      <div className="glass-button p-4">
        <h3 className="text-2xl">02</h3>
        <h2 className="text-2xl font-semibold font-henny py-2">
          Specialized Lament Psalms
        </h2>
        <p className="mb-2">
          In addition to the aforementioned elements, a portion of the lament
          brings comfort to a repentant heart and where the people promise to
          offer thanksgiving once seeing God’s intervention.
        </p>
        <p className="mb-2">
          <b>Penitential:</b> 6, 32*, 38, 51, 102, 130, 143
        </p>
        <p>
          <b>Imprecatory:</b> 35, 69, 83, 88, 109, 137, 140
        </p>
      </div>
      <div className="glass-button p-4">
        <h3 className="text-2xl">03</h3>
        <h2 className="text-2xl font-semibold font-henny py-2">
          Thanksgiving Psalms
        </h2>
        <p className="mb-2">
          Glorify the Lord, let us exalt his name together. Let us make known
          among the nations what he has done and why we should show our
          appreciation.
        </p>
        <p className="mb-2">
          <b>Community:</b> 65*, 67*, 75, 107, 124, 136*
        </p>
        <p>
          <b>Individual:</b> 18, 21, 30, 32*, 34, 40:1-11, 66:13-20, 92, 108*,
          116, 118, 138
        </p>
      </div>
      <div className="glass-button p-4">
        <h3 className="text-2xl">04</h3>
        <h2 className="text-2xl font-semibold font-henny py-2">
          Specialized Thanksgiving Psalms
        </h2>
        <p className="mb-2">
          These psalms are for adoration and recognition that God is good beyond
          all expectations. One should give praise to the Lord, and proclaim his
          name.
        </p>
        <p className="mb-2">
          <b>Salvation History:</b> 8*, 105-106, 135, 136
        </p>
        <p>
          <b>Psalms of Trust:</b> 11, 16, 23, 27*, 62, 63, 91, 121, 125, 131
        </p>
      </div>
      <div className="glass-button p-4">
        <h3 className="text-2xl">05</h3>
        <h2 className="text-2xl font-semibold font-henny py-2">
          Hymnal Psalms and Spiritual Songs
        </h2>
        <p className="mb-2">
          A hymn is a religious song, specifically written for the purpose of
          adoration or prayer, and typically addressed to a prominent figure or
          personification.
        </p>
        <p className="mb-2">
          <b>Hymn and Doxology:</b> 8*, 19:1-6, 33, 66:1-12, 67*, 95, 100, 103,
          104, 111, 113, 114, 117, 145, 146, 147, 148, 149, 150
        </p>
      </div>
      <div className="glass-button p-4">
        <h3 className="text-2xl">06</h3>
        <h2 className="text-2xl font-semibold font-henny py-2">
          Liturgical Psalms (for Public Worship)
        </h2>
        <p className="mb-2">Psalms for public worship and poetic value.</p>
        <p className="mb-2">
          <b>Royal Psalms:</b> 2, 18, 20, 21, 29, 45, 47, 72, 93, 95*, 96, 97,
          98, 99, 101, 110, 144
        </p>
        <p className="mb-2">
          <b>Psalms of Zion:</b> 46, 48, 76, 84, 87, 122
        </p>
        <p className="mb-2">
          <b>Temple Liturgies:</b> 15, 24, 68*, 82, 95*, 115, 134
        </p>
      </div>
      <div className="glass-button p-4">
        <h3 className="text-2xl">07</h3>
        <h2 className="text-2xl font-semibold font-henny py-2">
          Community Psalms
        </h2>
        <p className="mb-2">
          In which the nation expresses deep sorrow for the travails of a nation
          and as a group asking for God’s blessing or intervention
        </p>
        <p className="mb-2">
          <b>Wisdom Psalms:</b> 1*, 36*, 37, 49, 73, 112, 127, 128, 133
        </p>
        <p className="mb-2">
          <b>Torah Poems:</b> 1*, 19:7-14, 119
        </p>
      </div>
    </div>
  );
};

export default Genre;
