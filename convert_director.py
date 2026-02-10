
import json
import os

def load_json(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

def process_phase2(questions):
    processed = []
    for q in questions:
        options = []
        # Sort keys to ensure A, B, C, D, E order
        for key in sorted(q['reponses'].keys()):
            val = q['reponses'][key]
            options.append({
                "label": val['texte'],
                "value": key,
                "profile": val['profil']
            })
        
        processed.append({
            "id": q['id'],
            "text": q['situation'], # Sentinel uses 'text' or 'description'?
            # checking hcr_questions.js usually uses 'description' for the question text and 'title' for a short title
            # But MbtiTest uses 'text'. Sentinel uses 'description' in the HCR_DATA.
            # I will use 'description' to match HCR_DATA format.
            "description": q['situation'], 
            "category": "LEADERSHIP",
            "type": "SJT",
            "options": options
        })
    return processed

def process_phase3(questions):
    processed = []
    for q in questions:
        pole_faible = q['pole_faible']
        pole_fort = q['pole_fort']
        
        # Create 5 Likert options
        options = [
            {"label": f"Totalement : {pole_faible}", "value": 0},
            {"label": f"Plutôt : {pole_faible}", "value": 1},
            {"label": "Neutre / Équilibré", "value": 2},
            {"label": f"Plutôt : {pole_fort}", "value": 3},
            {"label": f"Totalement : {pole_fort}", "value": 4}
        ]
        
        processed.append({
            "id": q['id'],
            "description": q['situation'],
            "category": q['dimension'],
            "type": "DIMENSION",
            "maxScore": 4, # Important for Engine normalization 0-100
            "options": options
        })
    return processed

def process_phase4(questions):
    processed = []
    for q in questions:
        options = []
        for key in sorted(q['reponses'].keys()):
            val = q['reponses'][key]
            options.append({
                "label": val['texte'],
                "value": key,
                "profile": val['profil']
            })
            
        processed.append({
            "id": q['id'],
            "description": q['situation'],
            "category": "DILEMME",
            "type": "HARDCORE",
            "options": options
        })
    return processed

def main():
    base_path = '/Users/mehdiboussekine/.gemini/antigravity/playground/scalar-belt/hcr-sentinel'
    p1 = load_json(os.path.join(base_path, 'director_source_part1.json'))
    p2 = load_json(os.path.join(base_path, 'director_source_part2.json'))
    p3 = load_json(os.path.join(base_path, 'director_source_part3.json'))
    
    # Extract lists
    # Part 1 & 2 are in 'phase_2_leadership_84_questions' -> 'questions' (Part 1 input format might differ slightly? No, I used same structure)
    # Wait, Part 2 I wrote as a LIST [ ... ] directly? Let's check my tool call.
    # Part 2 tool call: CodeContent: squared bracket list directly.
    # Part 1 tool call: CodeContent: { "phase_2_...": { "questions": [...] } }
    
    # Adjusted extraction:
    list_phase2_part1 = p1['phase_2_leadership_84_questions']['questions']
    list_phase2_part2 = p2 # Part 2 was a list
    
    full_phase2 = list_phase2_part1 + list_phase2_part2
    
    list_phase3 = p3['phase_3_et_4_dimensions_hardcore']['phase_3_dimensions']['questions']
    list_phase4 = p3['phase_3_et_4_dimensions_hardcore']['phase_4_hardcore']['questions']
    
    # Process
    final_p2 = process_phase2(full_phase2)
    final_p3 = process_phase3(list_phase3)
    final_p4 = process_phase4(list_phase4)
    
    # Construct output JS content
    js_content = "export const DIRECTOR_SENTINEL_DATA = [\n"
    
    # Phase 2 Section
    js_content += "    {\n"
    js_content += '        section: "Leadership - Style de Direction",\n'
    js_content += '        id: "PHASE2",\n'
    js_content += '        items: ' + json.dumps(final_p2, indent=12, ensure_ascii=False).strip() + "\n"
    js_content += "    },\n"
    
    # Phase 3 Section
    js_content += "    {\n"
    js_content += '        section: "Dimensions Complémentaires",\n'
    js_content += '        id: "PHASE3",\n'
    js_content += '        items: ' + json.dumps(final_p3, indent=12, ensure_ascii=False).strip() + "\n"
    js_content += "    },\n"
    
    # Phase 4 Section
    js_content += "    {\n"
    js_content += '        section: "Hardcore - Dilemmes Extrêmes",\n'
    js_content += '        id: "PHASE4",\n'
    js_content += '        items: ' + json.dumps(final_p4, indent=12, ensure_ascii=False).strip() + "\n"
    js_content += "    }\n"
    js_content += "];\n"
    
    # Clean up formatting a bit because json.dumps indent is rigid
    # (Optional, but JS doesn't care)
    
    output_path = os.path.join(base_path, 'src/data/director_sentinel_data.js')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Successfully generated {output_path}")

if __name__ == '__main__':
    main()
