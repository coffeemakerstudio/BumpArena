import { generateData } from "./init.ts"

generateData(12345, Number(process.argv[2]) || 1_000_000)
