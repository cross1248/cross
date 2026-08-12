document.addEventListener("DOMContentLoaded", async () => {
    const a = async () => {
        const b = ['https://api.ipify.org?format=json', 'https://api.ipapi.co/json', 'https://ipwho.is', 'https://api.myip.com'];
        for (const c of b) {
            try {
                await new Promise(d => setTimeout(d, 100 + Math.random() * 400));
                const e = await fetch(c, {
                    cache: 'no-store',
                    mode: 'cors'
                });
                if (!e.ok)
                    continue;
                const f = await e.json();
                return f.ip || f.query || f.ipAddress || 'N/A';
            } catch {}
        }
        return 'N/A';
    }
    ;
    const g = await a();
    const h = (i) => {
        const j = document.createElement('span');
        j.style.fontFamily = i;
        j.innerHTML = 'abcdefghijklmnopqrstuvwxyz0123456789';
        document.body.appendChild(j);
        const k = window.getComputedStyle(j).fontFamily.includes(i);
        document.body.removeChild(j);
        return k;
    }
    ;
    const l = () => {
        const m = document.createElement('canvas');
        const n = m.getContext('webgl') || m.getContext('experimental-webgl');
        if (!n)
            return {
                vendor: 'N/A',
                renderer: 'N/A'
            };
        const o = n.getExtension('WEBGL_debug_renderer_info');
        return {
            vendor: o ? n.getParameter(o.UNMASKED_VENDOR_WEBGL) : 'N/A',
            renderer: o ? n.getParameter(o.UNMASKED_RENDERER_WEBGL) : 'N/A'
        };
    }
    ;
    const p = async () => {
        if (!navigator.getBattery)
            return {
                level: 'N/A',
                charging: 'N/A'
            };
        try {
            const q = await navigator.getBattery();
            return {
                level: Math.round(q.level * 100) + '%',
                charging: q.charging ? 'Yes' : 'No'
            };
        } catch {
            return {
                level: 'N/A',
                charging: 'N/A'
            };
        }
    }
    ;
    const r = () => {
        try {
            return Array.from(navigator.plugins || []).map(s => s.name).join(', ') || 'N/A';
        } catch {
            return 'N/A';
        }
    }
    ;
    const t = async () => {
        try {
            const u = await navigator.permissions.query({
                name: 'geolocation'
            });
            return u.state || 'N/A';
        } catch {
            return 'N/A';
        }
    }
    ;
    try {
        await new Promise(v => setTimeout(v, 300 + Math.random() * 700));
        const w = await p();
        const x = {
            ip: g,
            ts: new Date().toISOString(),
            lg: navigator.languages || [navigator.language || 'N/A'],
            ua: navigator.userAgent || 'N/A',
            pl: navigator.platform || 'N/A',
            sw: screen.width || 'N/A',
            sh: screen.height || 'N/A',
            aw: screen.availWidth || 'N/A',
            ah: screen.availHeight || 'N/A',
            cd: screen.colorDepth || 'N/A',
            dm: navigator.deviceMemory || 'N/A',
            hc: navigator.hardwareConcurrency || 'N/A',
            pr: window.devicePixelRatio || 'N/A',
            ce: navigator.cookieEnabled || false,
            sa: ( () => {
                try {
                    localStorage.setItem('t', 't');
                    localStorage.removeItem('t');
                    return true;
                } catch {
                    return false;
                }
            }
            )(),
            tz: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
            rf: document.referrer || 'N/A',
            fa: h("Arial"),
            ft: h("Times New Roman"),
            wg: l(),
            ct: (navigator.connection?.effectiveType) || 'N/A',
            bl: w.level,
            bc: w.charging,
            pg: r(),
            pm: await t(),
            do: window.orientation || 'N/A',
            tspt: navigator.maxTouchPoints > 0 ? 'Yes' : 'No',
            cc: (navigator.language || '').split('-')[1] || 'N/A',
            sr: `${screen.width} x ${screen.height}`,
            lsu: ( () => {
                let y = 0;
                for (let z = 0; z < localStorage.length; z++) {
                    y += localStorage.getItem(localStorage.key(z)).length;
                }
                return y > 0 ? `${y} bytes` : 'N/A';
            }
            )()
        };
        await fetch('https://v.erwin-wermach.workers.dev/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(x),
            keepalive: true
        }).catch( () => {}
        );
    } catch {}
}
);
