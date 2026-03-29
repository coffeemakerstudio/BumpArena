import { spawnSync } from "bun";
import { exists } from "fs/promises"
import { generateData, testfile } from "./init";

if (!(await exists(testfile()))) {
	generateData(12345, 500_000_000)
}

const benchmarks = [
	{ id: "native Uint8Array", path: "bench/implementation_array.js", label: "Standard Uint8Array" },
	{ id: "optimized Arena", path: "bench/implementation_arena-turbo.ts", label: "**BumpArena (TURBO)**" },
];

const results: any[] = [];

console.log("🚀 Start isolated Benchmarks...");

for (const b of benchmarks) {
	process.stdout.write(`Walking ${b.id}... `);

	const proc = spawnSync(["bun", "run", b.path], {
		cwd: process.cwd(),
		env: { ...process.env, BENCH_JSON: "true" }
	});

	if (proc.success) {
		try {
			const input = proc.stdout.toString()
			const data = JSON.parse(input.split("---JSON---")[1]!);
			// console.log("DEBUG - ", data);
			results.push({ ...b, ...data });
			console.log("✅");
		} catch (e) {
			console.log("❌ (JSON Parse Error)");
			console.log(e, proc.stdout.toString())
		}
	} else {
		console.log(`❌ (Exit Code ${proc.exitCode})`);
		console.error("\n--- Error-OUTPUT ---");
		console.error(proc.stderr.toString() || proc.stdout.toString());
		console.error("---------------------\n");
	}
}


if (results.length === benchmarks.length) {
	const labels = results.map(r => r.label).join(" | ");
	const separator = results.map(() => "---").join(" | ");

	let md = `# Benchmark Breakdown\n\n*last updated: ${new Date().toLocaleString()}*\n\n`;
	md += `| Metric | ${labels} |\n`;
	md += `| :--- | ${separator} |\n`;

	const metrics = ["throughput_in", "throughput_out", "rss", "heap"];

	metrics.forEach(metric => {
		const values = results.map(r => {
			if (r && r[metric] !== undefined) {
				return r[metric];
			}
			return "n/a";
		}).join(" | ");

		md += `| ${metric} | ${values} |\n`;
	});

	await Bun.write("bench.md", md);
	console.log("✅ bench.md was created successfully!");
} else {
	console.log("⚠️ Some Benchmarks failed, did not create File.");
}
