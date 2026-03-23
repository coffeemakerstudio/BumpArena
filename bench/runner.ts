import { spawnSync } from "bun";
import { writeFileSync } from "node:fs";

const benchmarks = [
	{ id: "Array", path: "bench/array.ts", label: "Standard Array" },
	{ id: "Arena", path: "bench/arena.ts", label: "**BumpArena**" },
	{ id: "Turbo", path: "bench/turbo.ts", label: "**BumpArena (TURBO)**" },
];

const results: any[] = [];

console.log("🚀 Starte isolierte Benchmarks...");

for (const b of benchmarks) {
	process.stdout.write(`Laufe ${b.id}... `);

	const proc = spawnSync(["bun", "run", b.path], {
		cwd: process.cwd(),
		env: { ...process.env, BENCH_JSON: "true" }
	});

	if (proc.success) {
		try {
			const input = proc.stdout.toString()
			const data = JSON.parse(input.split("---JSON---")[1]);
			console.log("DEBUG - ", data);
			results.push({ ...b, ...data });
			console.log("✅");
		} catch (e) {
			console.log("❌ (JSON Parse Fehler)");
			console.log(e, proc.stdout.toString())
		}
	} else {
		console.log(`❌ (Exit Code ${proc.exitCode})`);
		console.error("\n--- FEHLER-OUTPUT ---");
		console.error(proc.stderr.toString() || proc.stdout.toString());
		console.error("---------------------\n");
	}
}


if (results.length === benchmarks.length) {
	const labels = results.map(r => r.label).join(" | ");
	const separator = results.map(() => "---").join(" | ");

	let md = `# Benchmark Breakdown\n\n*Zuletzt aktualisiert: ${new Date().toLocaleString()}*\n\n`;
	md += `| Metric | ${labels} |\n`;
	md += `| :--- | ${separator} |\n`;

	const metrics = ["totalTime", "throughput", "rss", "heap"];

	metrics.forEach(metric => {
		const values = results.map(r => {
			if (r && r[metric] !== undefined) {
				return r[metric];
			}
			return "n/a";
		}).join(" | ");

		md += `| ${metric} | ${values} |\n`;
	});

	// Datei schreiben
	await Bun.write("bench.md", md);
	console.log("✅ bench.md wurde erfolgreich erstellt!");
} else {
	console.log("⚠️  Markdown wurde nicht erstellt, da Benchmarks fehlgeschlagen sind.");
}
