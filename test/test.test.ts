import { describe, test } from "node:test"
import { equal } from "node:assert"
import { TestCheckDirectPtrAccess, TestCheckPtrAccess, TestUseAfterFree } from "./ptrs"
import { TestCheckReserve } from "./reserve"
import { TestDirectAlloc } from "./directAccess"
import { TestIteratorAccess } from "./iterator"
import { FuzzAlloc, FuzzDirectAlloc } from "./Fuzz"

describe("Arena Checks", () => {
	test("Pointer Access", () => equal(TestCheckPtrAccess(), true, "Data corruption is possible!"))
	test("direct Pointer Access", () => equal(TestCheckDirectPtrAccess(), true, "Data corruption is possible!"))

	test("Use after free", () => equal(TestUseAfterFree(), true, "Use after free is possible!"))
	test("Test Reserving Data", () => equal(TestCheckReserve(), true, "Something with the reservation is not working properly"))
	test("Test allocating data directly", () => equal(TestDirectAlloc(), true, "Direct alloc isnt working properly"))
	test("Check Iteration over the Arena", () => equal(TestIteratorAccess(), true, "Check Iteration"))
	test("Arena Fuzz-Test: Random Alloc/Free & Integrity", () => equal(FuzzAlloc(), true, "Arena Fuzz-Test: Random Alloc/Free & Integrity"))
	test("Arena Fuzz-Test: Random DirectAlloc/Free & Integrity", () => equal(FuzzDirectAlloc(), true, "Arena Fuzz-Test: Random DirectAlloc/Free & Integrity"))
})

