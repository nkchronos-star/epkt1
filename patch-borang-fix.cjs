const fs = require('fs');
let code = fs.readFileSync('src/components/dashboard/Borang.tsx', 'utf8');

const targetStr = `           )}
           </div>
        </div>

      </form>
    </div>
  );
}`;

const replaceStr = `           )}
           </div>
        </div>

      </form>
    </div>
  );
}`;

// I replaced:
//            )}
//         </div>
// 
//       </form>
// with
//            )}
//            </div>
//         </div>
// 
//       </form>

// Let's just fix it by string replacement.
code = code.replace("           )}\\n           </div>\\n        </div>\\n\\n      </form>", "           )}\\n           </div>\\n        </div>\\n\\n      </form>");
// Wait, replacing it with the same thing doesn't fix it. I need to remove one `</div>`.

code = code.replace("           )}\\n           </div>\\n        </div>\\n\\n      </form>", "           )}\\n           </div>\\n\\n      </form>");

fs.writeFileSync('src/components/dashboard/Borang.tsx', code);
