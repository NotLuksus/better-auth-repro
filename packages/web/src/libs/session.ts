import { db, schema } from "db";
import { cache, redirect } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { getRequestURL } from "vinxi/http";

export const getUser = cache(async () => {
  "use server";
  const event = getRequestEvent();

  if (!event) {
    return null;
  }

  const session = await auth.api.getSession({
    headers: event.request.headers,
  });

  const id = session?.user.id;
  if (!id) {
    return null;
  }

  const user = await db.query.usersTable.findFirst({
    where: eq(schema.usersTable.id, id!),
  });

  return user;
}, "user");
