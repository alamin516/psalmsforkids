"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const SinglePsalm = () => {
  const params = useParams();
  const { id } = params;

  const prev = parseFloat(id) - 1;
  const next = parseFloat(id) + 1;

  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  useEffect(() => {
    if (id) {
      setDisablePrev(prev < 1);
      setDisableNext(next > 150);
    }
  }, [id, prev, next]);

  return (
    <div className="container max-w-7xl py-10">
      <h1>Psalm {id}</h1>

      <div className="flex justify-between items-center pt-10">
        <div>
          {!disablePrev && (
            <Link
              className="text-black px-5 py-1 bg-white/[0.5] border-white/[0.5] rounded-lg shadow hover:bg-[#9F176A] hover:text-white"
              href={`/psalms/${prev}`}
            >
              Psalm {prev}
            </Link>
          )}
        </div>
        <div>
          {!disableNext && (
            <Link
              className="text-black px-5 py-1 bg-white/[0.5] border-white/[0.5] rounded-lg shadow hover:bg-[#9F176A] hover:text-white"
              href={`/psalms/${next}`}
            >
              Psalm {next}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePsalm;
