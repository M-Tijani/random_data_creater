import { NextResponse } from "next/server";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";

export async function GET() {
  const config: Config = {
    dictionaries: [names],
  };
  const firstName: string = uniqueNamesGenerator(config);
  const lastName: string = uniqueNamesGenerator(config);

  return NextResponse.json({ firstName, lastName });
}
