"use client";
type paramsType = {
  params: {
    slug: string;
  };
};
export default function Page({ params }: paramsType) {
  return <p>Post: dynamic {params.slug}</p>;
}
