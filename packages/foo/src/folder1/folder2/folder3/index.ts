// TODO: when packaging,webpack can not figure out what's `@foo/src` means
import { meaningOfLife } from "@foo/src";

export function add(x1: number) {
  return x1 + meaningOfLife;
}
