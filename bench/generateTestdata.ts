import { generateData } from "./init.ts"

generateData(12345, Number(process.argv[2]) || 10_000_000)
