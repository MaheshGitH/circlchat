"use server";

import mongoClient from "@/mongodb/mongodb";

export default async function getLastMessage(formData: FormData) {
  const gId = formData.get("gId");
  const sCount = formData.get("sCount") || "";
  let convo: any = [];

  const collection = (await mongoClient)
    .db("conversation")
    .collection(gId as string);
  const result = collection
    .find({})
    .sort({ createdAt: -1 })
    .skip(+sCount * 10)
    .limit(10)
    .toArray();
  (await result).forEach((e) => {
    const parse = JSON.parse(JSON.stringify(e));
    convo.push(parse);
  });

  return convo;
}
