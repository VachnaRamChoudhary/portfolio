#include <bits/stdc++.h>
using namespace std;

struct Node
{
  string v;
  vector<Node *> links;
  Node *parent;
  int anc_locked, dec_locked, uid;
  bool isLocked;

  Node(string x, Node *p)
  {
    v = x;
    parent = p;
    anc_locked = 0;
    dec_locked = 0;
    uid = 0;
    isLocked = false;
  }

  void addLinks(vector<string> l, Node *p)
  {
    for (auto &i : l)
      links.push_back(new Node(i, p));
  }
};

unordered_map<string, Node *> vton;

struct Node *buildTree(Node *root, int &m, vector<string> &s)
{
  queue<Node *> q;
  q.push(root);

  int st = 1;
  while (!q.empty())
  {
    Node *r = q.front();
    q.pop();

    if (st >= s.size())
      continue;

    vector<string> temp;
    for (int i = st; i < st + m; i++)
      temp.push_back(s[i]);
    r->addLinks(temp, r);
    st += m;

    for (auto k : r->links)
      q.push(k);
  }

  return root;
}

void fillVtoN(Node *r)
{
  if (!r)
    return;
  vton[r->v] = r;
  for (auto k : r->links)
    fillVtoN(k);
}

void informDecendants(Node *r, int val)
{
  for (auto k : r->links)
  {
    k->anc_locked += val;
    informDecendants(k, val);
  }
}

bool verifyDecendants(Node *r, int &id, vector<Node *> &v)
{
  if (r->isLocked)
  {
    if (r->uid != id)
      return false;
    v.push_back(r);
  }
  if (r->dec_locked == 0)
    return true;

  bool ans = true;
  for (auto k : r->links)
  {
    ans &= verifyDecendants(k, id, v);
    if (ans == false)
      return false;
  }
  return ans;
}

bool lock(string v, int id)
{
  Node *t = vton[v];
  if (t->isLocked)
    return false;

  if (t->anc_locked != 0)
    return false;
  if (t->dec_locked != 0)
    return false;

  Node *cur = t->parent;
  while (cur)
  {
    cur->dec_locked++;
    cur = cur->parent;
  }
  informDecendants(t, 1);
  t->isLocked = true;
  t->uid = id;
  return true;
}

bool unlock(string v, int id)
{
  Node *t = vton[v];
  if (!t->isLocked)
    return false;
  if (t->isLocked && t->uid != id)
    return false;

  Node *cur = t->parent;
  while (cur)
  {
    cur->dec_locked--;
    cur = cur->parent;
  }
  informDecendants(t, -1);
  t->isLocked = false;
  return true;
}

bool upgrade(string v, int id)
{
  Node *t = vton[v];
  if (t->isLocked)
    return false;

  if (t->anc_locked != 0)
    return false;
  if (t->dec_locked == 0)
    return false;

  vector<Node *> vec;
  if (verifyDecendants(t, id, vec))
  {
    for (auto k : vec)
    {
      unlock(k->v, id);
    }
  }
  else
    return false;
  lock(v, id);
  return true;
}

int main()
{
#ifndef ONLINE_JUDGE
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);
#endif
  int n, m, q;
  cin >> n;
  cin >> m;
  cin >> q;

  vector<string> s(n);
  for (int i = 0; i < n; i++)
    cin >> s[i];

  Node *r = new Node(s[0], nullptr);
  r = buildTree(r, m, s);

  fillVtoN(r);

  int op, uid;
  string sq;
  for (int i = 0; i < q; i++)
  {
    cin >> op >> sq >> uid;

    bool ans;

    switch (op)
    {
    case 1:
      ans = lock(sq, uid);
      break;
    case 2:
      ans = unlock(sq, uid);
      break;
    case 3:
      ans = upgrade(sq, uid);
      break;
    }

    if (ans)
      cout << "true" << endl;
    else
      cout << "false" << endl;
  }

  return 0;
}